import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { isValidPhoneNumber } from 'libphonenumber-js'

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting helper (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // max requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false
  }

  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Sanitize and validate name
    const sanitizedName = name.trim()
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      )
    }
    if (!/^[a-zA-Z\s'-]+$/.test(sanitizedName)) {
      return NextResponse.json(
        { error: 'Name can only contain letters, spaces, hyphens, and apostrophes' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const sanitizedEmail = email.trim().toLowerCase()
    if (!emailRegex.test(sanitizedEmail) || sanitizedEmail.length > 254) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate phone number
    try {
      if (!isValidPhoneNumber(phone)) {
        return NextResponse.json(
          { error: 'Invalid phone number' },
          { status: 400 }
        )
      }
    } catch {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Validate message
    const sanitizedMessage = message.trim()
    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      )
    }

    // Check for potential spam patterns
    const spamPatterns = [
      /\b(viagra|cialis|casino|lottery|winner)\b/i,
      /(https?:\/\/[^\s]+){5,}/i, // Multiple URLs
      /(.)\1{20,}/, // Repeated characters
    ]
    
    if (spamPatterns.some(pattern => pattern.test(sanitizedMessage))) {
      return NextResponse.json(
        { error: 'Message flagged as spam' },
        { status: 400 }
      )
    }

    console.log('📧 Attempting to send email via Resend...')

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Mae\'s Childcare <onboarding@resend.dev>', // Change to contact@maeschildcare.com after DNS verification
      to: 'mildredknox949@gmail.com',
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header with Logo/Brand -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%); padding: 30px 20px; text-align: center;">
                      <div style="width: 120px; height: 120px; margin: 0 auto 15px; background-color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 15px;">
                        <img src="https://maeschildcare.com/images/name.png" 
                             alt="Mae's Childcare Logo" 
                             style="width: 100%; height: auto; display: block;">
                      </div>
                      <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        Mae's Childcare
                      </h1>
                      <p style="margin: 5px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                        Nurturing Young Minds
                      </p>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #2D3748; margin: 0 0 20px 0; font-size: 22px; border-bottom: 3px solid #FF6B6B; padding-bottom: 10px;">
                        📬 New Contact Form Submission
                      </h2>
                      
                      <!-- Contact Info Card -->
                      <div style="background: #F7FAFC; padding: 25px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #4FD1C5;">
                        <table width="100%" cellpadding="5" cellspacing="0">
                          <tr>
                            <td style="color: #2D3748; font-weight: bold; width: 80px;">👤 Name:</td>
                            <td style="color: #4A5568;">${name}</td>
                          </tr>
                          <tr>
                            <td style="color: #2D3748; font-weight: bold;">📧 Email:</td>
                            <td style="color: #4A5568;"><a href="mailto:${email}" style="color: #3182CE; text-decoration: none;">${email}</a></td>
                          </tr>
                          <tr>
                            <td style="color: #2D3748; font-weight: bold;">📱 Phone:</td>
                            <td style="color: #4A5568;"><a href="tel:${phone}" style="color: #3182CE; text-decoration: none;">${phone}</a></td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message -->
                      <div style="margin: 25px 0;">
                        <p style="margin: 0 0 10px 0; color: #2D3748; font-weight: bold; font-size: 16px;">💬 Message:</p>
                        <div style="background: white; padding: 20px; border-left: 4px solid #4FD1C5; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                          <p style="color: #4A5568; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                      </div>

                      <!-- Action Button -->
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${email}?subject=Re: Your inquiry to Mae's Childcare" 
                           style="display: inline-block; background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%); color: white; padding: 14px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; box-shadow: 0 4px 6px rgba(255,107,107,0.3);">
                          Reply to ${name.split(' ')[0]}
                        </a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background: #F7FAFC; padding: 25px 30px; border-top: 1px solid #E2E8F0;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="text-align: center;">
                            <p style="margin: 0 0 10px 0; color: #718096; font-size: 13px;">
                              <strong>Mae's Childcare</strong>
                            </p>
                            <p style="margin: 0 0 5px 0; color: #718096; font-size: 12px;">
                              📍 949 Grove Street, San Francisco, CA 94117
                            </p>
                            <p style="margin: 0 0 5px 0; color: #718096; font-size: 12px;">
                              📞 (123) 456-7890
                            </p>
                            <p style="margin: 0 0 15px 0; color: #718096; font-size: 12px;">
                              🌐 <a href="https://maeschildcare.com" style="color: #3182CE; text-decoration: none;">maeschildcare.com</a>
                            </p>
                            <p style="margin: 15px 0 0 0; padding-top: 15px; border-top: 1px solid #E2E8F0; color: #A0AEC0; font-size: 11px;">
                              This message was sent from your website's contact form.<br>
                              Reply directly to respond to the sender.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    })

    console.log('✅ Email sent successfully!', data)

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! We will get back to you soon.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Error sending email:', error)
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}