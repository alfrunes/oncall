import React, { FC, useCallback } from 'react';

import { HorizontalGroup, VerticalGroup, Icon, IconButton, Tooltip, IconName } from '@grafana/ui';
import cn from 'classnames/bind';

import Text, { TextType } from 'components/Text/Text';

import styles from './ScheduleCounter.module.css';

interface ScheduleCounterProps {
  type: Partial<TextType>;
  count: number;
  tooltipTitle: string;
  tooltipContent: React.ReactNode;
  onHover: () => void;
}

const typeToIcon = {
  link: 'link',
  warning: 'exclamation-triangle',
};

const typeToColor = {
  link: 'success',
  warning: 'warning',
};

const typeToBorderColor = {
  link: '#6CCF8E',
  warning: '#F8D06B',
};

const typeToBackgroundColor = {
  link: '#132322',
  warning: '#3A301E',
};

const cx = cn.bind(styles);

const ScheduleCounter: FC<ScheduleCounterProps> = (props) => {
  const { type, count, tooltipTitle, tooltipContent, onHover } = props;

  return (
    <Tooltip
      placement="bottom-start"
      interactive
      content={
        <div className={cx('tooltip', { [`tooltip__type_${type}`]: true })}>
          <VerticalGroup>
            <Text type={typeToColor[type]}>{tooltipTitle}</Text>
            <Text type="secondary">{tooltipContent}</Text>
          </VerticalGroup>
        </div>
      }
    >
      <div className={cx('root', { [`root__type_${type}`]: true })} onMouseEnter={onHover}>
        <HorizontalGroup spacing="xs">
          <Icon className={cx('icon', { [`icon__type_${type}`]: true })} name={typeToIcon[type] as IconName} />
          <Text type={typeToColor[type] as TextType}>{count}</Text>
        </HorizontalGroup>
      </div>
    </Tooltip>
  );
};

export default ScheduleCounter;
