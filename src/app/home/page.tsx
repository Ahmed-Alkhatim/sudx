import Container from "@/app/components/Container"
import Search from "./Search"
import Categories from "./Categories"
import Courses from "./Courses"
export default () => {

    return(
        <Container>
            <div className="space-y-6 pb-32">
                <Search />
                <Categories />
                <Courses />
                <Courses />
            </div>
        </Container>
    )
} 