import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import { withStyles, WithStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

interface DropdownProps {
  id: string;
  required?: boolean;
  label: string;
  error?: any;
  value?: any;
  fieldProps?: any;
  allowEmpty?: boolean;
  options: { value: string, label: string }[];

  onChange?: (newVal: string) => void;
}

const styles = theme => ({
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
});

class DropdownControl extends React.Component<DropdownProps & WithStyles<'formControl'>, {}> {

  private handleChange(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value.trim());
    }
  }

  public render() {
    const { id, label, required, error, value, options, classes, allowEmpty, fieldProps } = this.props;

    return (
      <FormControl required={required} className={classes.formControl} error={error && error[id] ? true : false} aria-describedby={id + '-text'}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select id={id} value={value} onChange={(e) => this.handleChange(e)} {...fieldProps}>
          {allowEmpty === true || allowEmpty === undefined ? <MenuItem value=''><em>None</em></MenuItem> : <></>}
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
        {error && error[id] ? error[id].map((e, key) => (<FormHelperText key={key} id={id + '-' + key + '-text'}>{e}</FormHelperText>)) : undefined}
      </FormControl>
    );
  }
}
export default withStyles(styles)<DropdownProps>(DropdownControl);