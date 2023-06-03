<?php
/**
 * Calculates the CRC-16 checksum of a string using the specified polynomial.
 * If no polynomial is specified, the standard CRC-16-CCITT polynomial (0x1021) is used.
 *
 * @param string $data The data to be checksummed.
 * @param int $polynomial The polynomial to use for the checksum calculation.
 * @return int The 16-bit CRC value as an integer.
 */
function crc16(string $data, int $polynomial = 0x1021): int {
    $crc = 0xffff;

    for ($i = 0; $i < strlen($data); $i++) {
        $crc ^= ord($data[$i]) << 8;
        for ($j = 0; $j < 8; $j++) {
            $crc = ($crc & 0x8000) ? (($crc << 1) ^ $polynomial) : ($crc << 1);
        }
    }

    return $crc & 0xffff;
}
