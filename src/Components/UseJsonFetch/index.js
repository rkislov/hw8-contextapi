import useJsonFetch from '../../Hooks/UseJsonFetch';

const SuccesFetch = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  return (
    <div>
      <span>SuccesFetch: </span>
      <span>data: {data !== null ? String(data) : 'null'};</span>{' '}
      <span>loading: {!loading ? 'false' : 'true'};</span>{' '}
      <span>error: {error === null ? 'null' : error}</span>
    </div>
  );
};

const ErrorFetch = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  return (
    <div>
      <span>ErrorFetch: </span>
      <span>data: {data !== null ? String(data) : 'null'};</span>{' '}
      <span>loading: {!loading ? 'false' : 'true'};</span>{' '}
      <span>error: {error === null ? 'null' : error}</span>
    </div>
  );
};

const LoadingFetch = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  return (
    <div>
      <span>LoadingFetch: </span>
      <span>data: {data !== null ? String(data) : 'null'};</span>{' '}
      <span>loading: {!loading ? 'false' : 'true'};</span>{' '}
      <span>error: {error === null ? 'null' : error}</span>
    </div>
  );
};

const Container = () => {
  return (
    <>
      <SuccesFetch />
      <ErrorFetch />
      <LoadingFetch />
    </>
  );
};

export default Container;