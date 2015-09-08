import ipaddr from 'ipaddr.js'
import {IPv4, IPv6, IPv6Exception} from './cidrs'

function parseCIDR(cidr) {
  return ipaddr.parseCIDR(cidr)
}

let IPv4Subnets = IPv4.map(parseCIDR)
let IPv6Subnets = IPv6.map(parseCIDR)
let exceptionalSubnet = parseCIDR(IPv6Exception)

export default function isMartianIP(ip) {
  if (!ipaddr.isValid(ip)) {
    throw new Error(`Expected valid IP address, called with "${ip}"`)
  }
  
  let parsedIP = ipaddr.parse(ip)
  function matchIP(subnet) {
    return parsedIP.match(subnet)
  }
  
  if (ipaddr.IPv4.isIPv4(ip)) {
    return IPv4Subnets.some(matchIP)
  }
  
  return IPv6Subnets.some(matchIP) && !parsedIP.match(exceptionalSubnet)
}
