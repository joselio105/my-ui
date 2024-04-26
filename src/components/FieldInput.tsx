import React, { InputHTMLAttributes, ReactNode } from 'react';
import { FieldContainer } from './FieldContainer';

export interface Props {
  labelText: string;
  icon?: ReactNode;
  errorMessage?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  listOptions?: string[];
}

export function FieldInput({
  labelText,
  icon,
  errorMessage,
  inputProps,
  listOptions,
}: Props) {
  return (
    <FieldContainer
      fieldId={inputProps.id ?? ''}
      labelText={labelText}
      errorMessage={errorMessage}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-slate-200">
        {icon ? icon : ''}
        <input
          className="flex-1 bg-slate-700 text-sm font-medium text-slate-200 p-3 rounded placeholder:text-slate-400 placeholder:font-light ring-0 outline-none"
          list={
            listOptions
              ? inputProps.list
                ? inputProps.list
                : 'list-options'
              : undefined
          }
          {...inputProps}
        />
        {listOptions ? (
          <datalist id={inputProps.list ? inputProps.list : 'list-options'}>
            {listOptions.map(itemOption => (
              <option>{itemOption}</option>
            ))}
          </datalist>
        ) : (
          ''
        )}
      </div>
    </FieldContainer>
  );
}
