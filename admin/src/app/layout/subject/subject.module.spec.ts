import { SubjectModule } from './subject.module';

describe('FormModule', () => {
    let formModule: SubjectModule;

    beforeEach(() => {
        formModule = new SubjectModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
