import ipaddr from 'ipaddr.js'

const { IPv4, IPv6, isValid, parse } = ipaddr

const IPv4SpecialRanges = Object.keys(IPv4.prototype.SpecialRanges)
const IPv6SpecialRanges = Object.keys(IPv6.prototype.SpecialRanges)
const globalMultiCast = /^ff.e:/

export default function isMartianIP(ip) {
  if (!isValid(ip)) {
    throw new Error(`Expected valid IP address, called with "${ip}"`)
  }

  const range = parse(ip).range()

  if (IPv4.isIPv4(ip)) {
    return IPv4SpecialRanges.includes(range)
  }

  if (globalMultiCast.test(ip)) {
    return false
  }

  return IPv6SpecialRanges.includes(range)
}
