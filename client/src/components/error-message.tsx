export interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <>
    <p className="red-text">{errorMessage} </p>
    <p className="form__error-message">{errorMessage} </p>
  </>
);

export default ErrorMessage;
