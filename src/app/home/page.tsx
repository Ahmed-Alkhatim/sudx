import Container from "@/app/components/Container"
import Search from "./Search"
import Categories from "./Categories"
export default () => {

    return(
        <Container>
            <Search />
            <Categories className = "mt-5"/>
        </Container>
    )
} 