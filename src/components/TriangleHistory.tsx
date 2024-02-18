import { triangleAtom, triangleListAtom } from '@/store/atoms'
import { useAtom } from 'jotai'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Button } from './ui/button'

const TriangleHistory = () => {
  const [triangles, setTriangles] = useAtom(triangleListAtom)
  const [currentTriangle, setCurrentTriangle] = useAtom(triangleAtom)

  const handleSelectTriangleFromHistory = (id: string) => {
    setCurrentTriangle(triangles.find((triangle) => triangle.id === id))
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>History</CardTitle>
        <CardDescription>
          Click on any entry bellow to load its details 🖱️
        </CardDescription>
      </CardHeader>
      <CardContent>
        {triangles && (
          <Table>
            <TableCaption>
              Just a list with all the triangles you have calculated
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Side A Length</TableHead>
                <TableHead>Side A Angle</TableHead>
                <TableHead>Side B Length</TableHead>
                <TableHead>Side B Angle</TableHead>
                <TableHead>Side C Length</TableHead>
                <TableHead>Side C Angle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {triangles.map((triangle) => (
                <TableRow
                  key={triangle.id}
                  onClick={() => handleSelectTriangleFromHistory(triangle.id)}
                  className="cursor-pointer"
                >
                  <TableCell className="font-medium">{triangle.type}</TableCell>
                  <TableCell>{triangle.vertices[0]}</TableCell>
                  <TableCell>{triangle.angles[0]}°</TableCell>
                  <TableCell>{triangle.vertices[1]}</TableCell>
                  <TableCell>{triangle.angles[1]}°</TableCell>
                  <TableCell>{triangle.vertices[2]}</TableCell>
                  <TableCell>{triangle.angles[2]}°</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      {triangles.length > 0 && (
        <CardFooter>
          <Button className="w-full" onClick={() => setTriangles([])}>
            Clear
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default TriangleHistory
