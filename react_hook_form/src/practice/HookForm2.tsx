import React, { useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

function NestedInput() {
    const { register } = useFormContext();
    return (
        <input placeholder="User Name" {...register('name')} />
    )
}

interface Form {
    name: string;
}
const HookForm2 = () => {
    const methods = useForm();
    const [result, setResult] = useState('');

    const onSubmit = (data: Form | any) => {
        setResult(JSON.stringify(data));
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <NestedInput />
                <input type="submit" />
                <p>{result}</p>
            </form>
        </FormProvider>
    
    );
};

export default HookForm2;