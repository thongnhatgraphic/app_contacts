import { notification } from 'antd';

const key = 'updatable';

export const openNotificationSuccess = () => {
  notification.success({
    key,
    message: 'Success ....',
    description: 'Congratulation !!!!!!!!!!!!!!!!!!!',
})
};

export const openNotificationError = () => {
  notification.error({
    key,
    message: 'Error',
    description: 'Faild :( !!!!!!!!!!!!!!',
  })
};

export const openNotificationWarning = () => {
  notification.warning({
    key,
    message: 'Warning',
    description: 'Warning :( !!!!!!!!!!!!!!',
  })
};

