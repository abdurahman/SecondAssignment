import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button, Switch} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

class MainScreen extends React.Component {
  state = {
    switchVal: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      flooring_price: 0,
      installation_price: 0,
      flooring_total: 0,
      installation_total: 0,
      total_cost: 0,
      tax_total: 0,
    };
  }

  floor = () => {
    var roomSize = parseInt(this.state.size);
    var flooringPrice = parseInt(this.state.flooring_price);

    var result = roomSize * flooringPrice;
    this.setState({flooring_total: result});
  };

  tax = () => {
    var roomSize = parseInt(this.state.size);
    var flooringPrice = parseInt(this.state.flooring_price);
    var installationPrice = parseInt(this.state.installation_price);

    var result = (roomSize * flooringPrice) + (roomSize * flooringPrice);
    var tax = result * 0.13;
    this.setState({tax_total: tax});
  };

  install = () => {
    var roomSize = parseInt(this.state.size);
    var installationPrice = parseInt(this.state.installation_price);

    var result = roomSize * installationPrice;
    this.setState({installation_price: result});
  };

  total = () => {
    var roomSize = parseInt(this.state.size);
    var flooringPrice = parseInt(this.state.flooring_price);
    var installationPrice = parseInt(this.state.installation_price);

    var result = roomSize * flooringPrice + roomSize * flooringPrice;
    this.setState({total_cost: result});
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Size of Room</Text>
        <TextInput
          onChangeText={(size) => this.setState(size)}
          placeholder="Enter Size of Room Here..."
        />
        <Switch onValueChange={(switchVal) => this.setState({switchVal})}  value={this.state.switchVal}/>
        <Text>{this.state.switchValue? "Feet" : "Metres"}</Text>
        <Text>Price per unit of flooring</Text>
        <TextInput
          onChangeText={(flooring_price) => this.setState(flooring_price)}
          placeholder="Enter Flooring Price Here..."
        />
        <Text>Price per unit of flooring installation</Text>
        <TextInput
          onChangeText={(installation_cost) => this.setState(installation_cost)}
          placeholder="Enter Installation Price Here..."
        />
        <Button title="Calculate Flooring Cost" onPress={this.floor} />
        <Button title="Calculate Installation Cost" onPress={this.install} />
        <Button title="Calculate Total Cost" onPress={this.total} />
        <Button title="Calculate Tax" onPress={this.tax} />

        <Text>Flooring: + {this.state.flooringPrice}</Text>
        <Text>Installation: + {this.state.installationPrice}</Text>
        <Text>Total Cost: + {this.state.total_cost}</Text>
        <Text>Tax: + {this.state.tax_total}</Text>
        <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    );
  }
}

export {MainScreen};
