class Apple {
    constructor(weight, color = 'red') {
        this.weight = weight;
        this.color = color;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        if(this.weight > 0) return true;
        return false;
    }

    getWeight() {
        return this.weight;
    }
}



// class Apple{
//     constructor(weight){
//         this.weight =weight;
//     }
//     decrease(){
//         this.weight--;
//     }
//     isEmpty(){
//         if(this.weight() >0) return true;
//         return false;
//     }
//     getWeight(){
//     return this.weight;
//     }
// }