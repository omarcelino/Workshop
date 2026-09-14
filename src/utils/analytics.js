// Provider-agnostic event tracking. With no provider registered, track()
// safely does nothing — wiring in a real analytics tool later is just one
// registerAnalyticsProvider() call at startup, no component changes needed.
const providers = []

export function registerAnalyticsProvider(sendFn) {
  providers.push(sendFn)
}

export function track(eventName, payload = {}) {
  providers.forEach((send) => {
    try {
      send(eventName, payload)
    } catch {
      // Analytics must never break the UI.
    }
  })
}
