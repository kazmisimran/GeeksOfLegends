export class Hero{
    constructor(name,hp,ap){
        this.name=name;
        this.hp=hp;
        this.ap=ap;
    }

}

export class Guerrier extends Hero{
    constructor(name,hp,ap,rp){
        super(name,hp,ap);
        this.rp=0;
    }
}

export class Mage extends Hero{
    constructor(name,hp,ap,mp){
        super(name,hp,ap);
        this.mp=mp;
    }
}

export class Archer extends Hero{
    constructor(name,hp,ap,arrows){
        super(name,hp,ap);
        this.arrows=arrows;
    }
}