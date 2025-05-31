import IconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material/IconButton";

export interface BtnProps extends Omit<MuiIconButtonProps, "color" | "size"> {
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
}

export function IconBtn({
  children,
  color = "primary",
  size = "medium",
  disabled,
  ...rest
}: BtnProps): React.ReactElement {
  return (
    <IconButton
      color={color}
      size={size}
      disabled={disabled}
      TouchRippleProps={{
        classes: { rippleVisible: "custom-ripple" }
      }}
      {...rest}
    >
      {children}
    </IconButton>
  );
}
