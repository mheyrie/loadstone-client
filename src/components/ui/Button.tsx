/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { type FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  type?: any;
  children: React.ReactNode;
  className?: string;
  url?: string;
  onClick?: () => void;
  route?: string;
  title?: string;
  icon?: string;
  disabled?: boolean;
  style?: any;
  loading?: boolean;
  content: string;
};

const Button: FC<Props> = (props) => {
  const {
    className,
    onClick,
    loading,
    content,
    disabled,
    icon,
    title,
    url,
    route,
    type,
    style,
    ...otherProps
  } = props;

  function createRippleEffect(event: React.MouseEvent) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  if (onClick) {
    return (
      <button
        type={type || "button"}
        className={`btn ${className || ""}`}
        onClick={(e) => {
          createRippleEffect(e);
          onClick();
        }}
        disabled={disabled || loading}
        title={title}
        style={style}
        {...otherProps}
      >
        {loading ? (
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-brand-purple border-t-transparent"></div>
        ) : (
          <>
            {icon && <i className={`icon-${icon}`}></i>}
            {content}
          </>
        )}
        {url && <Link to={url} />}
        {route && <Link to={route} />}
      </button>
    );
  }

  // If no onClick handler, render a simple button

  return (
    <button
      type={type || "button"}
      className={`btn ${className || ""}`}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
      style={style}
      {...otherProps}
    >
      {loading ? (
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-brand-purple border-t-transparent"></div>
      ) : (
        <>
          {icon && <i className={`icon-${icon}`}></i>}
          {content}
        </>
      )}
      {url && <Link to={url} />}
      {route && <Link to={route} />}
    </button>
  );
};

export default Button;
