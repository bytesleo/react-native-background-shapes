
# react-native-background-shapes

[![NPM version](https://badge.fury.io/js/react-native-backgroud-shapes.svg)](https://npmjs.org/package/react-native-backgroud-shapes) [![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://raw.githubusercontent.com/kevoj/react-native-backgroud-shapes/master/LICENSE)

> Beautiful backgrounds shapes to React Native based in flex

### Examples

<img src="https://imgur.com/Dzkd0zB.jpg" width="300" >

![Imgur](https://imgur.com/Dzkd0zB.jpg){:height="50%" width="50%"}
![Imgur](https://imgur.com/i7YfOxK.jpg){:height="50%" width="50%"}
![Imgur](https://imgur.com/m2f78nl.jpg){:height="50%" width="50%"}
![Imgur](https://imgur.com/dNwUJV2.jpg){:height="50%" width="50%"}

### Installation
**Yarn**
```bash
yarn add react-native-background-shapes
```
**Npm**
```bash
npm i react-native-background-shapes
```
### Usage
```javascript
import react from "react";
import {View} from "react-native";
import {Shapes} from "react-native-background-shapes";

export const example () => {
return (
    <View>
        <Shapes />
    </View>
    );
}
```
### Options

```javascript
// Basic
 <Shapes />
// Advance
 <Shapes 
    primaryColor="#416DF8"
    secondaryColor="#2F53D5"
    height={3}
    borderRadius={20}
    figures={[
      {name: 'circle', position: 'center', size: 60},
      {name: 'donut', position: 'flex-start', axis: 'top', size: 80},
      {name: 'circle', position: 'center', axis: 'right', size: 100},
    ]}
 />
```
* **primaryColor**: String, HEX color.
* **secondaryColor**: String, HEX color.
* **height**: Number, 1 = full screen, default (3.5)
* **borderRadius**: Number, default 30
* **figures**: Array
* * **name**: String = "circle","donut, "triangle", "diamondNarrow", "cutDiamond"
* * **position**: String = "flex-start", "center, "flex-end", "baseline", "stretch"
* * **axis**: String = "top", "right, "bottom", "left"

## License

MIT © [Leonardo Rico](https://github.com/kevoj/react-native-background-shapes/blob/master/LICENSE)