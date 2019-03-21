import { B } from './b';

class A {
    public getB(): B {
        const bb = new B();
        return bb;
    }
}
