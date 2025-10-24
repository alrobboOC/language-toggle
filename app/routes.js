//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Persist language selection across the prototype
router.use((req, res, next) => {
  req.session.data = req.session.data || {}

  // Default to English once per session
  if (typeof req.session.data.languagePreference === 'undefined') {
    req.session.data.languagePreference = 'en'
  }

  // Accept several possible query keys (header macro may use ?lang=cy)
  const q =
    (req.query.languagePreference ||
     req.query.lang ||
     req.query.language ||
     req.query.locale ||
     '').toString().toLowerCase()

  if (q === 'cy' || q === 'en') {
    req.session.data.languagePreference = q
  }

  next()
})

// Add your routes here
