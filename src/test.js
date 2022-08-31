import test from 'node:test';
import { strict as assert } from 'node:assert';

import isMartianIP from './index.js'

test('Martian CIDR', () => {
  assert.equal(isMartianIP('8.8.8.8'), false, 'should return false for public IPv4 addresses')
  assert.equal(isMartianIP('2a00:1450:4001:80b::1000'), false, 'should return false for public IPv6 addresses')
  assert.equal(isMartianIP('10.0.0.1'), true, 'should return true for private IPv4 addresses')
  assert.equal(isMartianIP('fe80::1'), true, 'should return true for private IPv6 addresses')
  assert.equal(isMartianIP('ff0e::1'), false, 'should return false for IPv6 addresses from ff0e::/16 subnet')
  assert.throws(() => isMartianIP('not a real IP'), 'should throw for invalid addresses')
})
