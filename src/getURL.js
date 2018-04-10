export default function ({clientId, state, scope}) {
  const current = encodeURIComponent(`${window.location.protocol}//${window.location.host}/`)
  const base = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&'
  const fullScope = scope && scope.length ? `&scope=${encodeURIComponent(scope.join(' '))}` : ''
  return `${base}client_id=${clientId}&redirect_uri=${current}&state=${state}${fullScope}`
}
