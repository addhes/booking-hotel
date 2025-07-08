import Card from '@/components/card'

const main = () => {
  return (
    <div className='max-w-screen-xl py-6 pb-20 px-4 mx-auto'>
        <div className="grid gap-7 md:grid-cols-3">
            <Card name='Vila Puncak' price={2000000} people={3} />
            <Card name='Vila Bogor' price={300000} people={3} />
            <Card name='Vila Bekasi' price={400000} people={3} />
            <Card name='Vila Tangsel' price={500000} people={3} />
            <Card name='Vila Nita' price={600000} people={3} />
            <Card name='Vila Pancoran' price={600000} people={3} />
        </div>
    </div>
  )
}

export default main