import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicFormArrayModel
} from "@ng2-dynamic-forms/core";

export const MY_DYNAMIC_FORM_MODEL: DynamicFormControlModel[] = [

    new DynamicInputModel({

        id: "exampleInput",
        label: "Example Input",
        // maxLength: 42,
        validators: {
            required: null,
            maxLength: 3
        },
        errorMessages: {
            required: "{{label}} is required."
        },
        placeholder: "example input"
    }),

    new DynamicRadioGroupModel<string>({

        id: "exampleRadioGroup",
        label: "Example Radio Group",
        options: [
            {
                label: "Option 1",
                value: "option-1",
            },
            {
                label: "Option 2",
                value: "option-2"
            },
            {
                label: "Option 3",
                value: "option-3"
            }
        ],
        value: "option-3"
    }),

    new DynamicCheckboxModel({

        id: "exampleCheckbox",
        label: "I do agree"
    }),

    // new DynamicFormArrayModel({
    //     id: "myFormArrayModel"
    // })

    new DynamicFormArrayModel({

    id: "myFormArray",
    initialCount: 2,
    createGroup: () => {
        return [
            new DynamicInputModel({

                id: "formArrayInput",
                label: "Form Array Input"
            })
        ];
    }
})


];
