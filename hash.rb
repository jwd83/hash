# Calculates the CRC-16 checksum of a byte array using the specified polynomial.
# If no polynomial is specified, the standard CRC-16-CCITT polynomial (0x1021) is used.
def crc16(data, polynomial = 0x1021)
	crc = 0xffff
	data.each_byte do |byte|
		crc ^= byte << 8
		8.times do
			crc = (crc & 0x8000) != 0 ? ((crc << 1) ^ polynomial) : (crc << 1)
		end
	end
	crc & 0xffff
end
