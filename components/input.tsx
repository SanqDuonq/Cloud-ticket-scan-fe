import InputProps from "@/interfaces/input.interface";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputComponent = (props: InputProps) => {
    return (
        <>
            <View style={[props.style]}>
                <Text
                    style={[styles.label]}
                > 
                    {props.label}
                </Text>
                <TextInput
                    placeholder={props.placeholder}
                    style={[styles.input]}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: '700',
        color: '#333'
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 9999,
        fontSize: 14,
        paddingLeft: 15
    }
})



export default InputComponent;