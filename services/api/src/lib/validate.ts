import Ajv, {JSONSchemaType} from 'ajv';

const ajv = new Ajv();

export const validate = <T>(schema: JSONSchemaType<T>, data: unknown): data is T => {
    const valid = ajv.validate(schema, data);

    if (!valid) {
        throw new Error('Validation error', {cause: ajv.errors});
    }

    return true;
};
