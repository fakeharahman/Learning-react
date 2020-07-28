import { useReducer, useCallback } from "react"

const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
}

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case 'SEND': return {
            loading: true,
            error: null,
            data: null,
            extra: null,
            identifier: action.identifier
        }
        case 'RESPONSE': return {
            ...httpState,
            loading: false,
            data: action.responseData,
            extra: action.extra
        }
        case 'ERROR': return {
            loading: false,
            error: action.errorData
        }
        case 'CLEAR': return initialState;

        default: throw new Error('Should not get here!')

    }
}
const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
    const clear = useCallback(
        () => {
            dispatchHttp({ type: 'CLEAR' })
        },
        [],
    )
    const sendRequest = useCallback((url, method, body, extra, reqIdentifier) => {
        dispatchHttp({ type: 'SEND', identifier: reqIdentifier })

        fetch(
            // `https://react-hooks-bacc.firebaseio.com/ingredients/${id}.json`,
            url,
            {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application.json'
                }
            }).then(response => {
                return response.json();
            }).then(response => {
                dispatchHttp({ type: 'RESPONSE', responseData: response, extra: extra })
            })
            .catch(err => {
                dispatchHttp({ type: 'ERROR', errorData: err.message })

            })
    }, [])

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear: clear
    }
}

export default useHttp