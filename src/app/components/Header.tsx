import Container from "./Container"
export default function Header(){
    return(
        <div className="py-5">
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-[18px] text-primary font-bold">SudX</h1>
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3327 15.6667H0.666016V14.0001H1.49935V8.19291C1.49935 4.03631 4.85722 0.666748 8.99935 0.666748C13.1415 0.666748 16.4993 4.03631 16.4993 8.19291V14.0001H17.3327V15.6667ZM6.91602 16.5001H11.0827C11.0827 17.6507 10.1499 18.5834 8.99935 18.5834C7.84877 18.5834 6.91602 17.6507 6.91602 16.5001Z" fill="#00707E"/>
                    </svg>
                </div>
            </Container>
        </div>
    )
}