import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';
/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

// assigning styling for priorities
export function TaskItem({
  title,
  priority,
  realiseDate,
  designers,
  projectName,
}) {
  const getPriorityClass = () => {
    if (priority === 'Low') return `${styles.lowPriority}`;
    if (priority === 'Medium') return `${styles.mediumPriority}`;
    if (priority === 'High') return `${styles.highPriority}`;
    return '';
  };

  return (
    <div className={styles.itemWrapper}>
      <div className={`${styles.titleStyle}`}>{title}</div>
      <div>
        <div className={`${styles.priorityStyle} ${getPriorityClass()}`}>
          {priority}
        </div>
      </div>
      <div className={`${styles.dateStyle}`}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlUlEQVR4nOWRMQ6DMAxF30QZWIN6QzZWRjrCubhBK3GDFm4RlMqVrOAALWOfFDlx/v+JZNjGy/oZ/8cBPrEO0xjmds9UAE6db8oc9h+caFfmAXgAZRSizaVohjjEyYWXmhs/zCON/u2b0LgDNWkqYASuKcFFagb0wAt4Ap30tGaTzphC6JlYcw4vxwFTymMFzN8EnGIBv75ESzHoS2YAAAAASUVORK5CYII="
          alt="sunset"
        />
        <div>{realiseDate}</div>
      </div>
      <div className={`${styles.designersStyle}`}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO2Vy0rDQBSGPxQvYG3dCfoIoq60j6H2Lbw+g2sR1KK+h7gUlxJFFDda3eoDKCpWxBsjf0vaycQkTsFFPjgEcv7/5JxkMgM5OTn/lD5gGTgGnhUBsAT0dsDXwihwAXw54hwY8eizJmgUuQRmgEHFLFBT7qxtoqw+ixUJr4CSnf651yi26MFncSKRmcDFnDSBB5/Fk0Tm1bkoSvPowWfxkKBQSZp7Dz6LQCKzcFxUpDny4LNYkKjmWExDwI008x58Fj36VYzwWgunqKiEipxK+1dfJMMq4tpQatL48rVgNpQq8B5TyOQ2Izai33xvwGrcG+gG9iWu6yHTwICiDGwBr9Ic6MH9wGEK3x7QFdXAugS3wLirS2ASuJN2B9jN4FtrT04AH5ogrki4mJnoU5HWZz7VWDixrc42SE419H2z+My1SeOgmCI55VADWXzm1GxS180CySmEGsjie0nhycnJoWN8A4H+uwQ/ulm4AAAAAElFTkSuQmCC"
          alt="user-group-man-man--v1"
        />
        <div>{designers}</div>
      </div>
      <div className={`${styles.projectStyle}`}>{projectName}</div>
    </div>
  );
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  realiseDate: PropTypes.string.isRequired,
  designers: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
