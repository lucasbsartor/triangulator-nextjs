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
import { useAtom } from 'jotai'
import { triangleAtom } from '@/store/atoms'
import { Button } from './ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { getTriangleDescription } from '@/lib/triangle'

const TriangleResults = () => {
  const [triangle, setTriangle] = useAtom(triangleAtom)
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {triangle
            ? `${
                triangle.type.charAt(0).toUpperCase() + triangle.type.slice(1)
              } Triangle`
            : 'Info will show up here 😏'}
        </CardTitle>
        {triangle && <CardDescription>Triangle details</CardDescription>}
      </CardHeader>
      <CardContent>
        <Table>
          {triangle && (
            <TableCaption>
              <HoverCard openDelay={0}>
                <HoverCardTrigger className="hover:underline cursor-pointer">
                  Hover or click me me to know more 🤓
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <p>{getTriangleDescription(triangle.type)}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </TableCaption>
          )}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>Side A</TableHead>
              <TableHead>Side B</TableHead>
              <TableHead>Side C</TableHead>
            </TableRow>
          </TableHeader>
          {triangle && (
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Vertices</TableCell>
                <TableCell>{triangle.vertices[0]}</TableCell>
                <TableCell>{triangle.vertices[1]}</TableCell>
                <TableCell>{triangle.vertices[2]}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Angles</TableCell>
                <TableCell>{triangle.angles[0]}°</TableCell>
                <TableCell>{triangle.angles[1]}°</TableCell>
                <TableCell>{triangle.angles[2]}°</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </CardContent>
      {triangle && (
        <CardFooter>
          <Button className="w-full" onClick={() => setTriangle(undefined)}>
            Clear
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default TriangleResults
