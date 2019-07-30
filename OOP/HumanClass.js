class Human{
    constructor(name,gender,weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale(){
        if(this.gender) return 'Nam';
        return 'Nu';
        
    }

    setGender(gender){
        this.gender = gender;
    }

    checkApple(apple){
        apple.isEmpty();
    }

    eat(apple){
        if(apple.isEmpty()) {
            apple.decrease();
            this.weight++;
        } else {
            alert('Het Tao');
        }
        
    }

    say(){
        let info;
        info = this.getName() + " " 
        + this.isMale() + " "
        + this.getWeight();
        return info;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getWeight(){
        return this.weight;
    }

    setWWeight(weight){
        this.weight = weight;
    }
}

// class Human{ 
//  constructor  (name,gender,weight){
//      this.name = name;
//      this.gender = gender;
//      this.weight = weight;
// }

//     isMale(){
//         if(this.gender) return 'Nam';
//         return 'Nữ';
//     }

//     setGender(gender){
//         this.gender = gender;
//     }

//     checkApple(apple){
//         apple.isEmpty();
//     }

//     eat(apple){
//         if(apple.isEmpty()){
//             apple.decrease();
//             this.weight ++;
//         }else{
//             alert('hết táo');
//         }
//     }

//     say(){
//         let info;
//         info = this.getName() + " "
//         + this.isMale() + " " 
//         + this.weight();
//         return info;
//     }

//     getName (){
//         return this.name;
//     }

//     setName(name){
//         this.name =name;
//     }

//     getWeight(){
//         return this.weight;
//     }

//     setWeight(weight){
//         this.weight = weight;
//     }
// }