import {Picker} from "@react-native-picker/picker";
import React, {useState} from "react";
import {FlatList, SafeAreaView, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {Button} from "../Button";
import {ListItem} from "../ListItem";
import {setFilter} from "../../modules/filters/actions";
import {sortingSelector, yearSelector} from "../../modules/filters/selectors";
import {getLaunches} from "../../modules/launches/actions";
import {Launch} from "../../modules/launches/typings";
import {styles} from "./LaunchesList.styles";

export const LaunchesList: React.FC<{data: Launch[]}> = props => {
  // use selectedId to change color on row click
  const [selectedId, setSelectedId] = useState(null);
  // use these 2 states to display / hide the 2 pickers
  // the 2 states are toggled by the buttons
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);
  const [isSortPickerOpen, setIsSortPickerOpen] = useState(false);

  const currentYear = useSelector(yearSelector);
  const currentSorting = useSelector(sortingSelector);

  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item._id)}
        selectedId={selectedId}
      />
    );
  };

  const YEARTITLE = currentYear ? `Year: ${currentYear}` : `Pick a year`;
  const SORTTITLE =
    currentSorting === "asc" ? `Sort: Ascending` : `Sort: Descending`;

  return (
    <SafeAreaView>
      <View style={styles.buttonsContainerView}>
        <View style={styles.buttonLeftContainerView}>
          <Button
            title={YEARTITLE}
            onPress={() => {
              setIsSortPickerOpen(false);
              setIsYearPickerOpen(!isYearPickerOpen);
            }}
          />
        </View>
        <View style={styles.buttonRightContainerView}>
          <Button
            title={SORTTITLE}
            onPress={() => {
              setIsYearPickerOpen(false);
              setIsSortPickerOpen(!isSortPickerOpen);
            }}
          />
        </View>
      </View>

      {/*list of rows with each row being a ListItem, rendered by renderItem defined above*/}
      <View style={styles.flatListContainerView}>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
          extraData={selectedId}
        />
      </View>

      {/*year and sort pickers*/}
      {isYearPickerOpen && (
        <View style={styles.pickerContainerView}>
          <Picker
            style={{backgroundColor: "white"}}
            selectedValue={currentYear}
            onValueChange={itemValue => {
              setIsYearPickerOpen(false);
              dispatch(setFilter({sort: currentSorting, year: itemValue}));
              dispatch(getLaunches({sort: currentSorting, year: itemValue}));
            }}
          >
            <Picker.Item label={"All"} value={null} />
            <Picker.Item label={"2019"} value={2019} />
            <Picker.Item label="2018" value={2018} />
            <Picker.Item label="2017" value={2017} />
            <Picker.Item label="2016" value={2016} />
            <Picker.Item label="2015" value={2015} />
          </Picker>
        </View>
      )}
      {isSortPickerOpen && (
        <View style={styles.pickerContainerView}>
          <Picker
            style={{backgroundColor: "white"}}
            selectedValue={currentSorting}
            onValueChange={sort => {
              setIsSortPickerOpen(false);
              dispatch(setFilter({sort, year: currentYear}));
              dispatch(getLaunches({sort, year: currentYear}));
            }}
          >
            <Picker.Item label={"Descending"} value={"desc"} />
            <Picker.Item label={"Ascending"} value={"asc"} />
          </Picker>
        </View>
      )}
    </SafeAreaView>
  );
};
