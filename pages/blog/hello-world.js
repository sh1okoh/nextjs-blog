import Image from 'next/image'
 
export default function HelloWorld() {
  return (
  <div>
    <h1>Hello World</h1>
    <Image
    src="/images/japan.jpg"
    height={144}
    width={144}
    alt="japan"
    />
  </div>
  )
}