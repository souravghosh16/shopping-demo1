import { StudentModule } from './student.module';

describe('FormModule', () => {
    let formModule: StudentModule;

    beforeEach(() => {
        formModule = new StudentModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
