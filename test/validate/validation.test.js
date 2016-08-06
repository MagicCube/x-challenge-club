import should from "should";
import Validation from "../../src/validate/Validation";

const ERR_MSG = "ERROR_MESSAGE";

describe("validate/validation", () => {
    describe("#constructor", () => {
        it("should construct with value properly", () => {
            const VALUE = 1;
            should(new Validation(VALUE).value).be.exactly(VALUE);
        });

        it("should construct properly without argument", () => {
            should(new Validation().value).be.undefined();
        });

        it("should be valid by default", () => {
            should(new Validation(1).isValid).be.true();
        });
    });

    describe("#invalidate", () => {
        it("should invalidate with given error message", () => {
            const validation = new Validation();
            validation.invalidate(ERR_MSG);
            should(validation.isValid).be.false();
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });
    });

    describe("#check", () => {
        it("should not accept wrong parameter", () => {
            const validation = new Validation();
            (() => validation.check()).should.throw();
            (() => validation.check(null)).should.throw();
            (() => validation.check(1)).should.throw();
        });

        it("should work with boolean properly", () => {
            const validation = new Validation();
            validation.check(true);
            should(validation.isValid).be.true();
            validation.check(false);
            should(validation.isValid).be.false();
        });

        it("should work with function properly", () => {
            const VALUE = 1;
            let validation = new Validation(VALUE);
            validation.check(value => {
                should(value).be.exactly(VALUE);
                return true;
            });
            should(validation.isValid).be.true();

            validation = new Validation();
            validation.check(value => {
                return false;
            });
            should(validation.isValid).be.false();
        });

        it("should work with RegExp properly", () => {
            const VALUE = "a";
            const validation = new Validation(VALUE);
            validation.check(/[a]/);
            should(validation.isValid).be.true();
            validation.check(/[b]/);
            should(validation.isValid).be.false();
        });


        it("should expose the right message", () => {
            const validation = new Validation();
            validation.check(false, ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });

        it("should not check after it is already invalid", () => {
            const validation = new Validation();
            // Invalidate
            validation.invalidate();
            let checkItAgain = false;
            validation.check(() => checkItAgain = true);
            should(checkItAgain).be.false();
        });
    });


    describe("#required", () => {
        it("should check properply with right values", () => {
            const validation = new Validation(1);
            validation.required(ERR_MSG);
            should(validation.isValid).be.true();
        });

        it("should check properply with undefined", () => {
            const validation = new Validation(undefined);
            validation.required(ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });

        it("should check properply with null", () => {
            const validation = new Validation(null);
            validation.required(ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });

        it("should check properply with NaN", () => {
            const validation = new Validation(NaN);
            validation.required(ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });

        it("should check properply with empty string", () => {
            const validation = new Validation(" ");
            validation.required(ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });
    });



    describe("#typeOf", () => {
        it("should check properply with right values", () => {
            const validation = new Validation(1);
            validation.typeOf("number", ERR_MSG);
            should(validation.isValid).be.true();
        });

        it("should check properply with wrong values", () => {
            const validation = new Validation(1);
            validation.typeOf("string", ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });
    });

    describe("#string", () => {
        it("should check properply with right values", () => {
            const validation = new Validation("abc");
            validation.string(ERR_MSG);
            should(validation.isValid).be.true();
        });

        it("should check properply with wrong values", () => {
            const validation = new Validation(1);
            validation.string(ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });
    });

    describe("#number", () => {
        it("should check properply with right values", () => {
            const validation = new Validation(1);
            validation.number(ERR_MSG);
            should(validation.isValid).be.true();
        });

        it("should check properply with wrong values", () => {
            const validation = new Validation("abc");
            validation.number(ERR_MSG);
            should(validation.errorMessage).be.exactly(ERR_MSG);
        });
    });

    describe("#password", () => {
        ["ABCabc123", "123456", "123456789012345"].forEach(addr => {
            it(`should accept "${addr}"`, () => {
                const validation = new Validation(addr);
                validation.password(ERR_MSG);
                should(validation.isValid).be.true();
            });
        });

        ["12345", "abc", "12345@", "12345 ", " 12345", "1234567890123456"].forEach(addr => {
            it(`should deny "${addr}"`, () => {
                const validation = new Validation(addr);
                validation.password(ERR_MSG);
                should(validation.errorMessage).be.exactly(ERR_MSG);
            });
        });
    });

    describe("#email", () => {
        ["henry1943@163.com", "2391071@qq.com", "a@b.com", "1@2.com"].forEach(addr => {
            it(`should accept "${addr}"`, () => {
                const validation = new Validation(addr);
                validation.email(ERR_MSG);
                should(validation.isValid).be.true();
            });
        });

        ["henry1943@gmail.", "henry1943@gmail", "henry1943@", "henry1943", "@gmail.com"].forEach(addr => {
            it(`should deny "${addr}"`, () => {
                const validation = new Validation(addr);
                validation.email(ERR_MSG);
                should(validation.errorMessage).be.exactly(ERR_MSG);
            });
        });
    });

    describe("#phoneNumber", () => {
        ["+8613913954971", "+8528102312"].forEach(addr => {
            it(`should accept "${addr}"`, () => {
                const validation = new Validation(addr);
                validation.phoneNumber(ERR_MSG);
                should(validation.isValid).be.true();
            });
        });

        ["+852", "+86", "a12345678", "12345678a"].forEach(addr => {
            it(`should deny "${addr}"`, () => {
                const validation = new Validation(addr);
                validation.phoneNumber(ERR_MSG);
                should(validation.errorMessage).be.exactly(ERR_MSG);
            });
        });
    });
});
