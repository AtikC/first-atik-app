import styled from 'styled-components'
const MainContaeiner = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #9D44B5;
`

const Bar = styled.div`
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
`

const Image = styled.img`
    width: 200px;
    border-radius: 10px;
`
const Text = styled.div`
    color: white;
`

const App = () => {
    return (
        <MainContaeiner>
            <Image alt={'Atik'} src={'/images/atik.jpg'} />

            <Image style={{ marginTop: 10 }} alt={'Atik'} src={'/images/atik2.jpg'} />

            <div style={{ fontSize: '20', fontWeight: 800, marginTop: 10 }}> Atik first app</div>
            <Bar>
                <Text>The begging of something big</Text>
            </Bar>
        </MainContaeiner>
    )
}

export default App
