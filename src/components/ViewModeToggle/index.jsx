import * as Switch from '@radix-ui/react-switch';
import { GridFour, List } from 'phosphor-react';
import styles from './ViewModeToggle.module.scss';
import { useViewMode } from '../../Context/ViewModeContext';

const ViewModeToggle = () => {
  const { viewMode, setViewMode } = useViewMode();

  const handleCheckedChange = (checked) => {
    setViewMode(checked ? 'list' : 'grid');
  };

  return (
    <div className={styles.toggleWrapper}>
      <GridFour
        size={24}
        weight={viewMode === 'grid' ? 'fill' : 'regular'}
        className={styles.toggleIcon}
      />

      <Switch.Root
        className={styles.switchRoot}
        checked={viewMode === 'list'}
        onCheckedChange={handleCheckedChange}
        id="viewMode"
      >
        <Switch.Thumb className={styles.switchThumb} />
      </Switch.Root>

      <List
        size={24}
        weight={viewMode === 'list' ? 'fill' : 'regular'}
        className={styles.toggleIcon}
      />
    </div>
  );
};

export default ViewModeToggle;