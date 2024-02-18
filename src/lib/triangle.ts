export type Triangle = {
  id: string
  type: TriangleTypes
  vertices: [number, number, number]
  angles: [number, number, number]
}

export type TriangleTypes = 'scalene' | 'equilateral' | 'isosceles'

export const isValidTriangle = (
  sideA: number,
  sideB: number,
  sideC: number
): boolean => {
  return (
    sideA + sideB < sideC ||
    sideA + sideC < sideB ||
    sideB + sideC < sideA ||
    [sideA, sideB, sideC].includes(0)
  )
}

export const getTriangleDescription = (triangleType: TriangleTypes) => {
  if (triangleType === 'equilateral') {
    return 'An equilateral triangle is a type of triangle with all three sides of equal length, and all three angles measuring 60 degrees.'
  }
  if (triangleType === 'isosceles') {
    return 'An isosceles triangle is a type of triangle that has two sides of equal length, and consequently, two angles of equal measure.'
  }
  return 'A scalene triangle is a type of triangle in which all three sides have different lengths, and consequently, all three angles have different measures.'
}

export const getTriangleType = (
  sideA: number,
  sideB: number,
  sideC: number
): TriangleTypes => {
  if (sideA === sideB && sideB === sideC) {
    return 'equilateral'
  }
  if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'isosceles'
  }
  return 'scalene'
}

export const getTriangleAngles = (
  sideA: number,
  sideB: number,
  sideC: number
): [number, number, number] => {
  const firstAngle = Math.floor(
    Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)) *
      (180 / Math.PI)
  )
  const secondAngle = Math.floor(
    Math.acos((sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC)) *
      (180 / Math.PI)
  )
  const thirdAngle = Math.floor(
    Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)) *
      (180 / Math.PI)
  )

  return [firstAngle, secondAngle, thirdAngle]
}
