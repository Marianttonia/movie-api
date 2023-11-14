// style the page
import styled from 'styled-components'

export const Container = styled.div `

    h1 {
        text-align: center;
        margin: 4rem 0;
    }

`

export const MovieList = styled.ul `
    display: grid;
    list-style: none;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    // max-width: 75vw;
`

export const Movie = styled.li `
img {
    width: 15rem;
    height: 20rem;
    margin-bottom: 2rem;
    border-radius: 1rem;
}

span {
    font-weight: bold;
    font-size: 120%;
}

a {
    transition: all 0.5s;
}

a : hover {
    transform: scale(1.1)
}
`