
import './Messages.css'
import { useState } from 'react'

function Messages() {

  // CONVERSATION STATE
  const [selectedConversation, setSelectedConversation] = useState(
    'Appointment Coordination'
  )

  // MESSAGE COMPOSER STATE
  const [newMessage, setNewMessage] = useState('')

  // STORAGE FOR NEWLY SENT MESSAGES
  const [sentMessages, setSentMessages] = useState({})

  // SEND MESSAGE FUNCTION
  const handleSendMessage = () => {

    const trimmedMessage = newMessage.trim()

    // Prevent empty messages
    if (trimmedMessage === '') {
      return
    }

    // Store the message in the selected conversation
    setSentMessages((previousMessages) => ({
      ...previousMessages,

      [selectedConversation]: [
        ...(previousMessages[selectedConversation] || []),
        trimmedMessage
      ]
    }))

    // Clear the message composer
    setNewMessage('')
  }

  // GET THE LATEST MESSAGE FOR AN INBOX PREVIEW
  const getConversationPreview = (conversation, originalPreview) => {

    const messages = sentMessages[conversation]

    if (messages && messages.length > 0) {
      return messages[messages.length - 1]
    }

    return originalPreview
  }

  return (

    <main className="messages-page">

      {/* MESSAGES PAGE INTRODUCTION */}
      <section className="messages-intro">

        <p className="messages-eyebrow">
          PATIENT COMMUNICATION
        </p>

        <h1>
          Your Messages
        </h1>

        <p className="messages-description">
          Stay connected with our dental team and keep track of
          your conversations in one convenient place.
        </p>

      </section>


      {/* MESSAGING WORKSPACE */}
      <section className="messages-workspace">

        <div className="messages-layout">


          {/* CONVERSATION INBOX */}
          <aside className="messages-inbox">

            {/* INBOX HEADER */}
            <div className="messages-inbox-header">

              <h2>
                Inbox
              </h2>

              <p>
                Your recent conversations
              </p>

            </div>


            {/* CONVERSATION LIST */}
            <div className="messages-list">


              {/* FIRST CONVERSATION */}
              <button
  type="button"
                className={`messages-list-item ${
                  selectedConversation === 'Appointment Coordination'
                    ? 'messages-list-item-active'
                    : ''
                }`}
                onClick={() => setSelectedConversation('Appointment Coordination')}
              >

                <h3>
                  Appointment Coordination
                </h3>

                <p>
                  {getConversationPreview(
                    'Appointment Coordination',
                    'I would like to confirm my upcoming appointment.'
                  )}
                </p>

                <span className="messages-timestamp">
                  9:42 AM
                </span>

                <span className="messages-unread-indicator">
                  2 new
                </span>

              </button>


              {/* SECOND CONVERSATION */}
              <button
  type="button"
                className={`messages-list-item ${
                  selectedConversation === 'Dental Care Team'
                    ? 'messages-list-item-active'
                    : ''
                }`}
                onClick={() => setSelectedConversation('Dental Care Team')}
              >

                <h3>
                  Dental Care Team
                </h3>

                <p>
                  {getConversationPreview(
                    'Dental Care Team',
                    'Thank you for the information about my treatment.'
                  )}
                </p>

                <span className="messages-timestamp">
                  Yesterday
                </span>

                <span className="messages-unread-indicator">
                  1 new
                </span>

              </button>


              {/* THIRD CONVERSATION */}
              <button
  type="button"
                className={`messages-list-item ${
                  selectedConversation === 'Billing Department'
                    ? 'messages-list-item-active'
                    : ''
                }`}
                onClick={() => setSelectedConversation('Billing Department')}
              >

                <h3>
                  Billing Department
                </h3>

                <p>
                  {getConversationPreview(
                    'Billing Department',
                    'I have a question about my recent statement.'
                  )}
                </p>

                <span className="messages-timestamp">
                  Monday
                </span>

                <span className="messages-unread-indicator">
                  3 new
                </span>

              </button>

            </div>

          </aside>


          {/* ACTIVE CONVERSATION PANEL */}
          <section className="messages-conversation">


            {/* CONVERSATION HEADER */}
            <div className="messages-conversation-header">

              <h2>
                {selectedConversation}
              </h2>

              <p>
                Conversation with the Aurelia Dental team
              </p>

              <span className="messages-conversation-status">
                Active conversation
              </span>

            </div>


            {/* MESSAGE HISTORY */}
            <div className="messages-history">


              {/* APPOINTMENT COORDINATION */}
              {selectedConversation === 'Appointment Coordination' && (
                <>

                  {/* INCOMING MESSAGE */}
                  <div className="messages-message messages-message-incoming">

                    <p>
                      Hello! Thank you for contacting Aurelia Dental.
                      How can we assist you today?
                    </p>

                  </div>

                  <span className="messages-message-time">
                    9:15 AM
                  </span>


                  {/* ORIGINAL OUTGOING MESSAGE */}
                  <div className="messages-message-group messages-message-group-outgoing">

                    <div className="messages-message messages-message-outgoing">

                      <p>
                        Hello, I would like to confirm my upcoming appointment.
                      </p>

                    </div>

                    <span className="messages-message-time">
                      9:18 AM
                    </span>

                  </div>


                  {/* SECOND INCOMING MESSAGE */}
                  <div className="messages-message messages-message-incoming">

                    <p>
                      Absolutely. We would be happy to help.
                      Could you please provide your preferred appointment date?
                    </p>

                  </div>

                  <span className="messages-message-time">
                    9:20 AM
                  </span>


                  {/* NEWLY SENT MESSAGES */}
                  {(sentMessages['Appointment Coordination'] || []).map((message, index) => (

                    <div
                      className="messages-message-group messages-message-group-outgoing"
                      key={index}
                    >

                      <div className="messages-message messages-message-outgoing">

                        <p>
                          {message}
                        </p>

                      </div>

                      <span className="messages-message-time">
                        Just now
                      </span>

                    </div>

                  ))}

                </>
              )}


              {/* DENTAL CARE TEAM */}
              {selectedConversation === 'Dental Care Team' && (
                <>

                  {/* INCOMING MESSAGE */}
                  <div className="messages-message messages-message-incoming">

                    <p>
                      Hello! We're happy to answer any questions about your
                      recent treatment. How are you feeling?
                    </p>

                  </div>

                  <span className="messages-message-time">
                    10:30 AM
                  </span>


                  {/* ORIGINAL OUTGOING MESSAGE */}
                  <div className="messages-message-group messages-message-group-outgoing">

                    <div className="messages-message messages-message-outgoing">

                      <p>
                        Thank you for the information about my treatment.
                        I appreciate your help.
                      </p>

                    </div>

                    <span className="messages-message-time">
                      10:34 AM
                    </span>

                  </div>


                  {/* NEWLY SENT MESSAGES */}
                  {(sentMessages['Dental Care Team'] || []).map((message, index) => (

                    <div
                      className="messages-message-group messages-message-group-outgoing"
                      key={index}
                    >

                      <div className="messages-message messages-message-outgoing">

                        <p>
                          {message}
                        </p>

                      </div>

                      <span className="messages-message-time">
                        Just now
                      </span>

                    </div>

                  ))}

                </>
              )}


              {/* BILLING DEPARTMENT */}
              {selectedConversation === 'Billing Department' && (
                <>

                  {/* INCOMING MESSAGE */}
                  <div className="messages-message messages-message-incoming">

                    <p>
                      Hello! We can help you understand your recent
                      statement. Which part would you like us to clarify?
                    </p>

                  </div>

                  <span className="messages-message-time">
                    11:15 AM
                  </span>


                  {/* ORIGINAL OUTGOING MESSAGE */}
                  <div className="messages-message-group messages-message-group-outgoing">

                    <div className="messages-message messages-message-outgoing">

                      <p>
                        I have a question about the balance shown on my statement.
                      </p>

                    </div>

                    <span className="messages-message-time">
                      11:19 AM
                    </span>

                  </div>


                  {/* NEWLY SENT MESSAGES */}
                  {(sentMessages['Billing Department'] || []).map((message, index) => (

                    <div
                      className="messages-message-group messages-message-group-outgoing"
                      key={index}
                    >

                      <div className="messages-message messages-message-outgoing">

                        <p>
                          {message}
                        </p>

                      </div>

                      <span className="messages-message-time">
                        Just now
                      </span>

                    </div>

                  ))}

                </>
              )}

            </div>


            {/* MESSAGE COMPOSER */}
            <div className="messages-composer">

              <textarea
                className="messages-input"
                placeholder="Write your message..."
                rows="3"
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
              />

              <button
                className="messages-send-button"
                type="button"
                onClick={handleSendMessage}
              >
                Send Message
              </button>

            </div>

          </section>

        </div>

      </section>

    </main>

  )
}

export default Messages
