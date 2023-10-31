function solution(phone_book) {
    phone_book.sort()
    
    for (let i = 0 ; i < phone_book.length - 1; i++) {
        const book = phone_book[i];
        const nextBook = phone_book[i+1];
        
        
        const sliceBook = nextBook.slice(0, book.length)
        if (book === sliceBook) {
            return false
        }
    }
    
    return true
}
