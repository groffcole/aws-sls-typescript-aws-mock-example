import SQS from "aws-sdk/clients/sqs";
import { doSomething } from "./BananaBread";

jest.mock("aws-sdk/clients/sqs");
const sqs = (SQS as unknown) as jest.Mock;
const getQueueUrl = jest.fn();
sqs.mockImplementationOnce(() => ({ getQueueUrl }));

test("doSomething should do something", async () => {
  const queueName = "the queue name";
  const url = "the url";

  getQueueUrl.mockReturnValue({ promise: () => ({ QueueUrl: url }) });

  await doSomething(queueName);

  expect(getQueueUrl).toHaveBeenCalledWith({ QueueName: queueName });
});
