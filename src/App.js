import styled from 'styled-components'
const MainContaeiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 8px;
    background-color: #cb8d6c;
`

const Bar = styled.div`
    background-color: #6c6c73;
    padding: 8px;
    border-radius: 10px;
`

const Image = styled.img`
    width: 90%;
    border-radius: 10px;
`
const Text = styled.div`
    color: white;
`

const App = () => {
    return (
        <MainContaeiner>
            <Text style={{ color: 'red' }}>WELCOME</Text>

            <Image alt={'Atik'} src={'/images/atik.jpg'} />

            <Image style={{ marginTop: 5 }} alt={'Atik'} src={'/images/atik2.jpg'} />
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '85%',
                    marginTop: 10
                }}
            >
                <Text>Contacts</Text>
                <Image style={{ width: 40 }} alt={'Atik'} src={'/images/instagram.png'} />

                <Image style={{ width: 40 }} alt={'Atik'} src={'/images/facebook.png'} />
                <a href={'https://vk.com/atik1'}>
                    <Image style={{ width: 40 }} alt={'Atik'} src={'/images/vk.png'} />
                </a>

                <Image style={{ width: 40 }} alt={'Atik'} src={'/images/telegram.png'} />

                <Image style={{ width: 40 }} alt={'Atik'} src={'/images/whatsapp.png'} />
            </div>

            <div style={{ fontSize: '20', fontWeight: 800, marginTop: 10 }}> Atik first app</div>
            <Bar>
                <Text>My first project</Text>
            </Bar>
        </MainContaeiner>
    )
}

export default App
