import swal from 'sweetalert2';

export const ALERT_ICON = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success'

}

export const Alert = ({icon='info', title = '', text='' }) => {
  swal.fire({
    icon,
    title,
    text
  });
}
