# Martian CIDR

Check if an IP address is from reserved subnet.

[![Build Status](https://travis-ci.org/arty-name/martian-cidr.svg?branch=master)](https://travis-ci.org/arty-name/martian-cidr)

[Certain IP subnets are reserved for special-use by Internet Assigned Numbers Authority (IANA)]
(https://en.wikipedia.org/wiki/Reserved_IP_addresses). A [Martian packet]
(https://en.wikipedia.org/wiki/Martian_packet) is an IP packet which specifies 
a source or destination address from such subnet. If seen on the public internet, 
these packets cannot actually originate as claimed, or be delivered.

You can check if some packet is a Martian packet like that:

    import isMartianIP from 'martian-cidr'
    console.log(isMartianIP('10.0.0.1')) // true

## Install

    npm install --save martian-cidr
    
## Running tests
   
    npm run test
    
## Author

[Artemy Tregubenko](https://arty.name/)

## License

[MIT](https://github.com/arty-name/martian-cidr/blob/master/LICENSE.md)
