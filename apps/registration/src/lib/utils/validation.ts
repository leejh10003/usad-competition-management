import _ from 'lodash';
export function disableNonNumeric(e: KeyboardEvent){
    if (e.code.startsWith('Key')){
        e.preventDefault();
    }
}
export function onGpaChange(e: InputEvent, context: {gpa: number | undefined}){
    if ((_.isNumber(context.gpa))){
        if (context.gpa as number > 4.5) {
            e.preventDefault();
            context.gpa = 4.5;
        }
        if (context.gpa as number < 0){
            e.preventDefault();
            context.gpa = 4.5;
        }
        context.gpa = parseFloat((context.gpa as number).toPrecision(2));
    } else {
        context.gpa = 0;
    }
}
export function onScoreChange(e: InputEvent, context:{ score: number | null | undefined}){
    if (!(_.isNumber(context.score))) {
        context.score = 0;
    }
}
export function validateZipCode(e: KeyboardEvent) {
    if ((e.key.match(/^[0-9]*$/g)?.length ?? 0) < 1) {
        e.preventDefault()
    }
}