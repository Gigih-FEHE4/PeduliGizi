import { screen, render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import ArticleItem from "../Components/ArticleItem"
import { dummy } from "../utils/dummy"

test('all informations are rendered', () => {
    render(
        <ArticleItem 
            image={dummy.image} 
            title={dummy.title}
            desc={dummy.content}
            onClick={_ => {}}
        />
    )

    const title = screen.getByText(dummy.title)
    const content = screen.getByText(dummy.content)
    const image = screen.getByRole('img')
    
    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(image).toBeInTheDocument()
})

test('click event fired once when user click on title, desc, or image', () => {
    const handleClick = jest.fn()
    render(
        <ArticleItem 
            image={dummy.image} 
            title={dummy.title}
            desc={dummy.content}
            onClick={handleClick}
        />
    )

    fireEvent.click(screen.getByText(dummy.title))
    expect(handleClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText(dummy.content))
    expect(handleClick).toHaveBeenCalledTimes(2)
    fireEvent.click(screen.getByRole('img'))
    expect(handleClick).toHaveBeenCalledTimes(3)
})