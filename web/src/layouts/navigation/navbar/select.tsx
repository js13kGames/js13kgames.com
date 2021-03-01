import {useRouter} from "next/router";
import styles from "./select.module.scss";

export interface SelectProps {
  yearOptions: Array<YearOptionsItem>;
  scrollClass?: string;
}

export interface YearOptionsItem {
  year: string;
}

const Select = ({yearOptions, scrollClass}: SelectProps) => {
  const router = useRouter();

  const onYearChange = (year) => {
    router.push(router.pathname.replace("[year]", year));
  };

  return (
    <select
      className={`${styles.select} ${scrollClass && styles[scrollClass]}`}
      onChange={(e) => {
        onYearChange(e.target.value);
      }}>
      {yearOptions.map(({year}) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default Select;
